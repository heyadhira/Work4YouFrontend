import React from 'react'
import Navbarhori from './Navbarhori'
import { useState, useEffect } from 'react'


const Application = () => {
    const [getuserdata, setUserdata] = useState([]);


    const getdata = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch("/api/local", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
                console.log("Error fetching data");
            } else {
                setUserdata(data);
                console.log("Data fetched successfully");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>
            <div className='container' >
                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.5rem", marginTop: "-1.6rem" }} >

                        <Navbarhori></Navbarhori>

                    </div>

                    <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12 mx-1' >
                        <div className='row' style={{ width: "100%" }} >
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <div className="contact-rightside col-12 col-lg-12 card-8 rounded-border mt-3" >

                                            <form method="POST">
                                                <div className="row">
                                                    <div className="col-md-12" style={{ marginTop: "2rem", marginBottom: "3rem", color: "#121212" }}>

                                                        <h3 > {id + 1}. Applicent Name: {element.name}</h3>
                                                        <hr></hr>
                                                    </div>


                                                </div>


                                                <div className="row">


                                                    
                                                    <div className="col-12 col-lg-2 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>email</p>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            id=""
                                                            className="form-control"
                                                            placeholder=""
                                                            value={element.email}

                                                        />
                                                    </div>

                                                    <div className="col-12 col-lg-2 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>phone</p>
                                                        <input
                                                            type="number"
                                                            name="phone"
                                                            id=""
                                                            className="form-control"

                                                            value={element.phone}

                                                        />

                                                    </div>
                                                    <div className="col-12 col-lg-2 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>religion</p>
                                                        <input
                                                            type="text"
                                                       
                                                            id=""
                                                            className="form-control"

                                                            value={element.religion}

                                                        />

                                                    </div>
                                                    <div className="col-12 col-lg-2 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>area</p>
                                                        <input
                                                            type="text"
                                                          
                                                            id=""
                                                            className="form-control"

                                                            value={element.area}

                                                        />

                                                    </div>
                                                    



                                                    <div className="row">
                                                        <div className="col-12 col-lg-2 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                                                            <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Service</p>
                                                            <input
                                                                type="text"
                                                           
                                                                id=""
                                                                className="form-control"
                                                                placeholder=" Service"

                                                                maxlength="10"
                                                                value={element.service}

                                                            />
                                                        </div>


                                                        <div className="col-12 col-lg-2 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                            <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>expirence</p>
                                                            <input

                                                                id=""
                                                                className="form-control"
                                                                placeholder=" exprirence"
                                                                maxlength="10"
                                                                value={element.expirence}

                                                            />
                                                        </div>
                                                        
                                                      
                                                        
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-12 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                            <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Address</p>
                                                            <input
                                                                type="text"
                                                                name="address"
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Flat No., Apt Name, Area , Street ,City"
                                                                value={element.address}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>




                                            </form>
                                        </div>


                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Application