import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const bucketList = express();

bucketList.use(express.json());
bucketList.use(cors());
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
import Todo from './models/Todo.js'

bucketList.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

bucketList.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
});

bucketList.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);
	res.json({result});
});

bucketList.get('/todo/complete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid todo ID' });
    }

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    todo.complete = !todo.complete;
    await todo.save();

    res.json(todo);
  } catch (error) {
    console.error('Error toggling todo complete:', error);
    res.status(500).json({ error: 'Server error toggling todo complete' });
  }
});


bucketList.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;

	todo.save();

	res.json(todo);
});

bucketList.listen(5000), () => {
	console.log('server is running on port 5000')
};