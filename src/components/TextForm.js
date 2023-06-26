import React from 'react'

import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <div>
        <div className="mb-3">
            <h1>{props.title}</h1>
            {/* <label for="exampleFormControlTextarea1" clasNames="form-label">{props.title}</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
  )
}

TextForm.propTypes = { title: PropTypes.string };
TextForm.defaultProps = { title: "Your Title Here" };
