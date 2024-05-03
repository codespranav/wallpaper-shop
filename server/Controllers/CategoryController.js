import e from "express";
import CategoryModel from "../Models/CategoryModel.js";
import slugify from "slugify";

//add new category
export const addNewCategory = async (req,  res)=>{
    try {
        const {name, description} = req.body;
        if(!name){
            return res.json({success: false, message: "Title is required"})
        }
        if(!description){
            return res.json({success: false, message: "Description is required"})
        }

        // check is categoryExists?
        const checkCat = await CategoryModel.findOne({name})
        if(checkCat){
            return res.json({status: false, message: "Category already exits"})
        }
        const AddCategory = new CategoryModel({name, slug: slugify(name), description})
        await AddCategory.save();
        res.send({success: true, message: "Category added"})
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "Something went wrong"
        })
    }
}

// delete category 
export const deleteCategory = async (req, res)=> {
    try {
        const {cid} = req.params
        // find category 
        const findCat  = await CategoryModel.findByIdAndDelete(cid)
        if(!findCat){
            res.send({
                success: false,
                message: "category not found"
            })
        }
        else{
            res.send({
                success: true,
                message: "category deleted"
            })
        }
    } catch (error) {
        console.log(error)
        res.send({success: false, message: "Something went wrong"})
    }
}

//edit category 
export const editCategory = async (req, res)=>{
    try {
        const {editedName, editedDescription} = req.body;
        const {cid} = req.params;
        const editCat = await CategoryModel.findByIdAndUpdate(cid, 
            {
                name: editedName,
                description: editedDescription
            })
            if(!editCat){
                return res.send({
                    success: false,
                    message: "Category not found"
                })
            }
            else{
                res.json({
                    success: true,
                    message: "Category Updated",
                    editCat
                })
            }
    } catch (error) {
        console.log(error)
        res.send({success: false, message: "Something went wrong"})

    }
}
//view all category
export const viewCategory = async (req, res)=>{
    try {
        let data = await CategoryModel.find({});
        res.json({
            success: true, 
            message: "data fetched",
            data
        })
    } catch (error) {
        console.log(error)
        res.send({success: false, message: "Something went wrong"})
    }
}