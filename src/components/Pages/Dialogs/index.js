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
                    <div className="message-head">
                        <div className="dialog-head">
                            <div className="dialog-head-image">
                                <img src={userImg} alt="" />
                            </div>

                            <div className="dialog-info">
                                <div className="user-name">Andrew</div>
                            </div>
                        </div>
                    </div>

                    <div className="message-area">
                        <div className="interlocutor you">
                            <div className="user-img">
                                <img src={userImg} alt="" />
                            </div>

                            <div className="text-box">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, sunt.
                            </div>
                        </div>
                        <div className="interlocutor me">
                            <div className="user-img">
                                <img src={userImg} alt="" />
                            </div>

                            <div className="text-box">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad aspernatur atque beatae consectetur culpa cumque dicta dolore dolores esse eveniet facere fugiat hic illo ipsum iste iusto laboriosam magnam maxime mollitia nisi perferendis possimus provident, quam quo quod quos ratione sint unde, velit veniam voluptate voluptatum! Assumenda error et mollitia nemo odio quis, saepe tempore veniam. A ab ad architecto atque consequatur deleniti distinctio doloremque doloribus eligendi enim error ex facere fugiat harum itaque iure, laborum libero maxime minima modi molestias nam nesciunt odio omnis, optio praesentium quas quis quo repellendus reprehenderit repudiandae, saepe sed sint tempore totam vel voluptatum? Aliquid architecto consequatur debitis distinctio dolores ea enim eos in itaque laudantium necessitatibus nihil odit pariatur perferendis provident quaerat quibusdam quo, repellat similique temporibus ut voluptas voluptatem? Dolor exercitationem fugit harum quibusdam, recusandae voluptas? Asperiores dolores fugiat ipsum, maxime nesciunt nisi nostrum nulla provident veniam voluptates. Adipisci dolor eos eum hic qui quisquam velit. Accusantium, exercitationem, officia? Deleniti fuga id, laboriosam minus quam temporibus! Ab corporis, cupiditate deleniti dicta dolor, doloribus expedita fugit illum laborum obcaecati possimus recusandae repellendus tempore! Aliquam aut corporis cum cumque debitis dignissimos eligendi est, et exercitationem fuga id, illo iure minima neque nesciunt nobis odio officia omnis quas quasi repellendus, similique ullam velit. Enim nesciunt, voluptate. Accusamus aperiam aspernatur culpa dignissimos doloremque earum enim, facere inventore itaque molestias neque nulla officia quas, sed vel? Aut, et fuga maxime molestiae nemo odit rerum temporibus voluptates? Accusantium, cupiditate dicta facere ipsa ipsum necessitatibus quisquam? Architecto debitis fuga iusto magnam minima odio possimus reiciendis repellat reprehenderit vitae! Aperiam culpa, est! Amet animi corporis, culpa cum deleniti eius enim est expedita explicabo illo in incidunt labore magnam minima, nemo nisi numquam obcaecati odit officia pariatur perferendis perspiciatis possimus quae quaerat quos reprehenderit, sequi tenetur vel vero voluptates.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Dialogs;
