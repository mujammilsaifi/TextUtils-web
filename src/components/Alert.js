import React from 'react'

export default function Alert(params) {

    return(
        params.alert && <div className={`alert alert-${params.alert.Type} alert-dismissible fade show`} role="alert">
            <strong>{params.alert.Type}</strong>:{params.alert.msg}
        </div>
    )
    
}
