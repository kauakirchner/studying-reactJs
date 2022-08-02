import React, { useState, useEffect } from "react";

const LearningUseEffect = () => {
    useEffect(() => {
        console.log('Effect')
    }, [])
    
    return (
        <div className="container">

        </div>
    )
}

export default LearningUseEffect