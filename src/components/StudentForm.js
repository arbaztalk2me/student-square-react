import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import Input from "./Input";
function StudentForm(props) {
  let history = useHistory();
  const firestore = useFirestore();
  const { id } = useParams();
  const docRef = id ? firestore.collection("students").doc(id) : null;

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    address1: "",
    address2: "",
    photos: "",
  });

  const loadStudent = async () => {
    try {
      const result = await docRef.get();
      if (result.exists) {
        setStudent(result.data());
      } else {
        console.log("no such data of student");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const onIntputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (id) {
      await docRef.update({
        ...student,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
    } else {
      firestore
        .collection("students")
        .add({ ...student, createdAt: firestore.FieldValue.serverTimestamp() });
    }
    history.push("/");
  };
  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  return (
    <div className="container">
      <div className="p-4">
        <div className="row">
          <div className="cold-md-10 mx-auto">
            <div className="card p-4">
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Input
                      name="name"
                      value={student.name}
                      placeholder="name"
                      onChange={onIntputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      name="email"
                      value={student.email}
                      placeholder="email"
                      onChange={onIntputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      name="standard"
                      value={student.standard}
                      placeholder="standard"
                      onChange={onIntputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      name="phone"
                      value={student.phone}
                      placeholder="phone"
                      onChange={onIntputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      name="address1"
                      value={student.address1}
                      placeholder="address1"
                      onChange={onIntputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      name="address2"
                      value={student.address2}
                      placeholder="address2"
                      onChange={onIntputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      name="photos"
                      value={student.photos}
                      placeholder="enter url of your photo"
                      onChange={onIntputChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-danger">
                  {id ? "Update Student" : "Add Student"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
