import React from 'react';
import Sidebar from '../components/Sidebar';
import PwdChangingSet from '../components/PwdChangingSet/PwdChangingSet';

const PwdChanging = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-none d-md-flex justify-content-center mt-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <PwdChangingSet />
          </div>
        </div>
      </div>
    </>
  );
};

export default PwdChanging;
