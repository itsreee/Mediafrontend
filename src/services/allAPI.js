// define all api for project , it calls commonAPI function

import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";


// uploadVideo Api- api must call by add component

export const uploadVideoApi=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// getAllVideos Api-called by view component

export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}


// save History Api called by videoCard

export const saveHistoryAPI=async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// getHistory API -called by History

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}


// removeHistoryApi called by history

export const removeHistoryApi=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// removeVideoApi called by history

export const removeVideoApi=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addCateogryAPI -called by Cateogry

export const addCateogryAPI=async(cateogryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/cateogries`,cateogryDetails)
}

// getAllCateogriesAPI   -called by Cateogry

export const getAllCateogriesAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/cateogries`,"")
}

// removeCateogryAPI  -called by Cateogry

export const removeCateogryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/cateogries/${id}`,{})
}

// getSingleVideoAPI called by cateogry

export const getSingleVideoAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

// updateCateogryAPI called by cateogry

export const updateCateogryAPI=async(cateogryId,updateCateogryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/cateogries/${cateogryId}`,updateCateogryDetails)
}

// getSingleCateogryAPI -called View
export const getSingleCateogryAPI= async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/cateogries/${id}`,"")
}