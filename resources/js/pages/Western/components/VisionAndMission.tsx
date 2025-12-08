import React from 'react'

const VisionAndMission = () => {
  return (
    <div className='my-8'>
        <div className="flex flex-col items-center text-center">
      {/* Title */}
      <p
        className="text-3xl font-bold text-primary inline-block"
      >
        Our Vision

      </p>
      {/* Underline (dynamic width) */}
      
      <div className="text-lg mt-4">
        Western International School aims to be the leading and most progressive bilingual international school in Cambodia.
      </div>
    </div>
    <div className="flex flex-col items-center text-center mt-4">
      <p
        className="text-3xl font-bold text-primary inline-block"
      >
        Our Mission

      </p>
      {/* Underline (dynamic width) */}
      
      <div className="text-lg mt-4 text-start">
        1. To build student discipline for lifelong success.<br/>2. To provide the best education system for our students.<br/>3. To be committed to retaining the best qualified staff and teachers.<br/>4. To continue to improve your education, care, and grooming.<br/>5. To strengthen students knowledge of both Khmer and English.<br/>6. To provide learning materials and an environment that fosters student learning.
      </div>
    </div>
    </div>
  )
}

export default VisionAndMission
