import React from "react";
import { useFormik } from "formik";
import { object, string, number } from 'yup';
import { Box, Typography} from "@mui/material";

function showInfo(values, {setSubmitting}){
    const {name, description, price, type} = values;
    alert(`
    Clothes: ${name},
    Description: ${description},
    Price: ${price},
    Type: ${type},
    `)
    setSubmitting(false);
}

export default function ClothesForm(){

    const schema = object().shape({
        name: string().min(2).required(),
        description: string(),
        price: number().min(50).max(500).positive(),
        type: string().required()
    })

    const formik = useFormik({
        initialValues:{
            name: '',
            description: '',
            price: '',
            type: '',
        },
        onSubmit: showInfo,
        validationSchema: schema,
        validateOnMount: true,
    })
    
    return(
        <Box mt={15}>
            <Typography 
            fontSize="30px" 
            > 
            The fourth task with clothes form
            </Typography>
            <Box style={{
                display: "flex",
                flexDirection: "column",
                width: "500px",
                justifyContent: "center",
                margin: "50px auto",
                padding: "30px 50px 50px 50px",
                border: "5px solid white",
                borderRadius: "10px"
            }}>
                <form onSubmit={formik.handleSubmit}>
                    <label 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "27px",
                            color: "white",
                            padding: "20px 0px",
                        }}
                        htmlFor="name"
                    >
                    Clothes
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            style={{
                                padding: "10px 0px",
                                border: "2px solid white",
                                borderRadius: "10px",
                                marginTop: "5px",
                                fontSize: "20px",
                                color: "#9bb0ff",
                                paddingLeft: "5px"
                            }}
                        />
                        {!!formik.touched.name && !!formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}
                    </label>
                    <label 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "27px",
                            color: "white",
                            padding: "20px 0px",
                        }}
                        htmlFor="description"
                    >                    
                    Description
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            onBlur={formik.handleBlur}
                            style={{
                                padding: "10px 0px",
                                border: "2px solid white",
                                borderRadius: "10px",
                                marginTop: "5px",
                                fontSize: "20px",
                                color: "#9bb0ff",
                                paddingLeft: "5px"
                            }}
                        />
                        {!!formik.touched.description && !!formik.errors.description && <span style={{ color: 'red' }}>{formik.errors.description}</span>}
                    </label>
                    <label 
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "27px",
                        color: "white",
                        padding: "20px 0px",
                        }}
                        htmlFor="price"
                    >
                    Price
                        <input
                            id="price"
                            name="price"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            onBlur={formik.handleBlur}
                            style={{
                                padding: "10px 0px",
                                border: "2px solid white",
                                borderRadius: "10px",
                                marginTop: "5px",
                                fontSize: "20px",
                                color: "#9bb0ff",
                                paddingLeft: "5px"
                            }}
                        />
                        {!!formik.touched.price && !!formik.errors.price && <span style={{ color: 'red' }}>{formik.errors.price}</span>}
                    </label>
                    <label 
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "27px",
                        color: "white",
                        padding: "20px 0px",
                        }}
                        htmlFor="type"
                    >
                    Type
                        <select
                        id="type"
                        name="type"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.type}
                        onBlur={formik.handleBlur}
                        style={{
                            padding: "10px 0px",
                            border: "2px solid white",
                            borderRadius: "10px",
                            marginTop: "5px",
                            fontSize: "20px",
                            color: "#9bb0ff",
                            paddingLeft: "5px",
                            marginBottom: "10px"
                        }}
                        >
                            <option value="" label="Select a type" />
                            <option value="T-shirt" label="T-shirt" />
                            <option value="Jeans" label="Jeans" />
                            <option value="Sweatshirt" label="Sweatshirt" />
                        </select>
                        {!!formik.touched.type && !!formik.errors.type && <span style={{ color: 'red' }}>{formik.errors.type}</span>}
                    </label>
        
                    <button 
                        style={{
                            height: "50px",
                            width: "100%",
                            border: "2px solid white",
                            borderRadius: "10px",
                            color: "#9a32f0",
                            fontSize: "27px",
                            fontWeight: 600,
                            backgroundColor: "white"
                        }}
                        type="submit" 
                        disabled={!formik.isValid && !formik.isSubmitting}
                    >
                    Submit
                    </button>
                </form>
            </Box>
        </Box>
    )
}
