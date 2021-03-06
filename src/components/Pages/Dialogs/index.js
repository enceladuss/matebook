import React from "react";

import "./Dialogs.css";

import userImg from "./../../../img/user.jpg";

const Dialogs = (props) => {
    return (
        <main className={`content dialogs-page`}>
            <div className="content-wrapp">

                <div className="dialogs filled-section">
                    <div className="section-head">
                        <h3 className="h3">Active dialogs</h3>
                    </div>

                    <div className="dialogs-list">

                        <div className="dialog-item">
                            <div className="dialog-head">
                                <div className="dialog-head-image">
                                    <img src={userImg} alt="" />
                                </div>

                                <div className="dialog-info">
                                    <div className="user-name">Andrew</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="messages filled-section">

                </div>

            </div>
        </main>
    );
};

export default Dialogs;
