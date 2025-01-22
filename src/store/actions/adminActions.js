import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  getAllUser,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctorService,
} from "../../services/userService";
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });

      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailded());
      }
    } catch (e) {
      dispatch(fetchGenderFailded());
      console.log("fetchGenderStart error", e);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFailded = () => ({
  type: actionTypes.FETCH_GENDER_FAILDED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_POSITION_START,
      });

      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailded());
      }
    } catch (e) {
      dispatch(fetchPositionFailded());
      console.log("fetchPositionStart error", e);
    }
  };
};
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fetchPositionFailded = () => ({
  type: actionTypes.FETCH_POSITION_FAILDED,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFailded = () => ({
  type: actionTypes.FETCH_ROLE_FAILDED,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailded());
      }
    } catch (e) {
      dispatch(fetchRoleFailded());
      console.log("fetchRoleStart error", e);
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.errCode === 0) {
        // thong bao tu dong: toast
        toast.success("Create a new user succeed!");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        dispatch(saveUserFailded());
      }
    } catch (e) {
      dispatch(saveUserFailded());
      console.log("saveUserStart error", e);
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailded = () => ({
  type: actionTypes.CREATE_USER_FAILDED,
});

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUser("ALL");
      if (res && res.errCode === 0) {
        // sắp xếp mảng: res.users.reverse()
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        toast.error("Fetch all users error!");
        dispatch(fetchAllUsersFailded());
      }
    } catch (e) {
      toast.error("Fetch all users error!");
      dispatch(fetchAllUsersFailded());
      console.log("fetchAllUsersStart error", e);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersFailded = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILDED,
});

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete the user succeed!");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Delete the user error!");
        dispatch(deleteUserFailded());
      }
    } catch (e) {
      toast.error("Delete the user error!");
      dispatch(deleteUserFailded());
      console.log("saveUserStart error", e);
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFailded = () => ({
  type: actionTypes.DELETE_USER_FAILDED,
});

export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Update the user succeed!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Update the user error!");
        dispatch(editUserFailded());
      }
    } catch (e) {
      toast.error("Update the user error!");
      dispatch(editUserFailded());
      console.log("EditUserStart error", e);
    }
  };
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailded = () => ({
  type: actionTypes.EDIT_USER_FAILDED,
});
// let res1 = await getTopDoctorHomeService("3");

export const fetchTopDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService("");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
        });
      }
    } catch (e) {
      console.log("FETCH_TOP_DOCTORS_FAILDED: ", e);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
      });
    }
  };
};

export const fetchAllDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctors();
      console.log("check res: ", res);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          dataDr: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAILDED,
        });
      }
    } catch (e) {
      console.log("FETCH_ALL_DOCTORS_FAILDED: ", e);
      dispatch({
        type: actionTypes.FETCH_ALL_DOCTORS_FAILDED,
      });
    }
  };
};
export const saveDetailDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctorService(data);

      if (res && res.errCode === 0) {
        toast.success("Save Infor Detail Doctor the user succeed!");
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
        });
      } else {
        console.log("err res", res);
        toast.error("Save Infor Detail Doctor the user error!");

        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED,
        });
      }
    } catch (e) {
      toast.error("Save Infor Detail Doctor the user error!");
      console.log("SAVE_DETAIL_DOCTOR_FAILDED: ", e);
      dispatch({
        type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED,
      });
    }
  };
};

export const fetchAllScheduleTime = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("TIME");
      console.log("check res: ", res);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
          dataTime: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED,
        });
      }
    } catch (e) {
      console.log("FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: ", e);
      dispatch({
        type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED,
      });
    }
  };
};

export const getRequiredDoctorInfor = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START,
      });

      let resPrice = await getAllCodeService("PRICE");
      let resPayment = await getAllCodeService("PAYMENT");
      let resProvince = await getAllCodeService("PROVINCE");
      if (
        resPrice &&
        resPrice.errCode === 0 &&
        resPayment &&
        resPayment.errCode === 0 &&
        resProvince &&
        resProvince.errCode === 0
      ) {
        let data = {
          resPrice: resPrice.data,
          resPayment: resPayment.data,
          resProvince: resProvince.data,
        };
        dispatch(fetchRequiredDoctorInforSuccess(data));
      } else {
        dispatch(fetchRequiredDoctorInforFailded());
      }
    } catch (e) {
      dispatch(fetchRequiredDoctorInforFailded());
      console.log("fetchRequiredDoctorInfor error", e);
    }
  };
};
export const fetchRequiredDoctorInforSuccess = (allRequireData) => ({
  type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
  data: allRequireData,
});
export const fetchRequiredDoctorInforFailded = () => ({
  type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILDED,
});
