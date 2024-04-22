import CategoryModel from "../Models/CategoryModel.js";
import slugify from "slugify";
export const addNewCategory = async (req,  res)=>{
    try {
        const {name} = req.body;
        if(!name){
            return res.json({success: false, message: "Title is required"})
        }

        // check is categoryExists?
        const checkCat = await CategoryModel.findOne({name})
        if(checkCat){
            return res.json({status: false, message: "Category already exits"})
        }
        const AddCategory = new CategoryModel({name, slug: slugify(name)})
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