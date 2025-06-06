import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';


export default  function RTE({name, control, label, defaultValue=""}) {
  return (
   <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller 
    name= {name || "content"} 
    control={control}
    render = {({field: {onChange}}) => (
        <Editor 
        apiKey='vnye9vnn3lw1pfow129if07gzysf3cuwpq50h1sfsmf97ft9'
        initialValue={defaultValue}
        init = {{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        }}
        onEditorChange={onChange}

        />
     )}  
    />

   </div>
  )
}

 