import BucketList from '../components/bucket_List/src/bucketList.jsx';

const CreateBuckets = () => {
  return (
    <div>
      <h1>Create Buckets</h1>
        <div class="description">
          <ul className="bucket_list">
            <li class="majoritySection">
              <h2>Your Bucket List</h2>
              <BucketList/>
            </li>
            <li class="smallerSection">
              <h2>Add More</h2>
                
            </li>
          </ul>
        </div>
    </div>
  );
};

export default CreateBuckets;
