import React from "react";
import { Link } from "react-router-dom";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loader from "./loader";
function Students(props) {
  const firestore = useFirestore();
  const students = useSelector((state) => state.firestore.ordered.students);
  useFirestoreConnect([
    {
      collection: "students",
      orderBy: ["createdAt", "desc"],
    },
  ]);
  const deleteStudent = async (id) => {
    try {
      await firestore.collection("students").doc(id).delete();
    } catch (error) {
      console.log("error", error);
    }
  };
  if (!students) {
    return <Loader />;
  }
  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {students.map((data) => (
            <div className="col-6 col-md-3" key={data.id}>
              <div className="card py-4 text-center mb-5">
                <img
                  style={{ height: "100px", width: "100px", margin: "auto" }}
                  src={data.photos}
                  className="card-img-top rounded-circle"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.email}</p>
                  <Link to={`/student/${data.id}`} className="btn btn-danger">
                    View Profile
                  </Link>
                  <button
                    className="btn btn-edit"
                    onClick={() => deleteStudent(data.id)}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
