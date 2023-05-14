import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, getUserProfile } from "../../store/users";
import EditProfileModal from "../EditProfileModal";
import OpenModalButton from "../OpenModalButton";
import "./UserDeleteConfirmation.css";
import { getTasksByUserId } from "../../store/tasks";
import { getBoardsByUserId } from "../../store/boards";
import DeleteUserModal from "../DeleteUserModal";
import SlideOutTask from '../SlideOutTask/SlideOutTask'
import quoteCensor from "./quoteCensor";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import { useModal } from "../../context/Modal";
import "./UserDeleteConfirmation.css"

function UserDeleteConfirmation() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {closeModal} = useModal();

    return (
        <>
            <div className="handle-profile-delete-div" onClick={closeModal}>
                <h3>Account Successfully Deleted</h3>
            </div>
        </>

    )
}

export default UserDeleteConfirmation;
