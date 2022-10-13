import React from "react";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
<div className="row">
<div className="col-9">
<input type="search" placeholder="Enter a city..." autoFocus={true} className="form-control" />
</div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-primary" />
</div>


</div>
            </form>
        </div>
    );
}