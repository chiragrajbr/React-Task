import React from 'react'

function Lo() {
  return (
    <div>
      <div className="container">
                
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className='form-group'>
                            <label>username</label>
                            <input className='form-control' type="text" /><br />
                        </div>
                        <div className='form-group'>
                            <label>password</label>
                            <input className='form-control' type="text" /><br />
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-2">
                                <button className='btn btn-primary'>login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Lo
