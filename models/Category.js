import Categories from '../pages/categories';
import mongoose, { model, models, Schema } from "mongoose";
 
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
    properties: [{ type: Object }]
});
 
export const Category = models?.Category || model('Category', categorySchema);