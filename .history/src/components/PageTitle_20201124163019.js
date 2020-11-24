import React from 'react'

export default function PageTitle({name,pagetitle}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center">
                <h1 className="text-captalize font-weight-bold my-3">{name}
                    <strong className="">{pagetitle}</strong>
                </h1>
                
            </div>
        </div>
    )
}
