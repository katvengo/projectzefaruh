// import React from "react"
// import TextField from '@material-ui/core/TextField'
// import InputAdornment from '@material-ui/core/InputAdornment';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';



// const FileInput = (props)=>{
//     console.log("props", props)
//     return(

//         <form action="#">
//         <div className="file-field input-field">
//             <div className="btn-floating white">
//             <IconButton>
//             <SearchIcon />
//           </IconButton>
            
//                 <input type="file" multiple />
//             </div>
//             <div className="file-path-wrapper">
//             <TextField
//                     id="inputLine"
//                     name="eventImage"
//                     value={props.value}
//                     onChange={props.onChange}
//                     type="text"
//                     fullWidth
//                     margin="normal"
//                     label="Image"
//                     // variant="none"
//                     style={{ margin: 8 }}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                     InputProps={{
//                         disableUnderline: true
//                     }}

//                 />
//             </div>
//         </div>
//     </form>
//     )
// }

// export default FileInput


import * as React from "react";

 class FileInput extends React.Component<undefined, undefined>
{
    constructor(props: any)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectorFiles: FileList)
    {
        console.log(selectorFiles);
    }

    render ()
    {
        return <div className= "row">
            <div className="col-m-2">
            <AddPhotoIcon />
            </div>
            <div className="col-m-12">
            <input type="file" onChange={ (e) => this.handleChange(e.target.files) } />
            </div>
        </div>;
    }
}

export default FileInput