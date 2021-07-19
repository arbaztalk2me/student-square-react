import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import Loader from "./loader";
function Student(props) {
  const firestore = useFirestore();
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const loadStudent = async () => {
    try {
      const docRef = firestore.collection("students").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setStudent(result.data());
      } else {
        console.log("No such data");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    loadStudent();
  }, []);
  if (!student) {
    return <Loader />;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card p-3">
            <div className="row">
              <div className="col-md-4 m-auto text-center">
                <img
                  src={student.photos}
                  className="rounded-circle"
                  style={{ height: 240 }}
                />
              </div>
              <div className="col-md-8">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name:- {student.name}</li>
                  <li className="list-group-item">Email:- {student.email}</li>
                  <li className="list-group-item">
                    Standard:- {student.standard}{" "}
                  </li>
                  <li className="list-group-item">Phone:- {student.phone} </li>
                  <li className="list-group-item">
                    Address1:- {student.address1}{" "}
                  </li>
                  <li className="list-group-item">
                    Address2:- {student.address2}{" "}
                  </li>
                </ul>
                <Link
                  to={`/studentform/${id}`}
                  className="btn btn-primary mt-2"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
