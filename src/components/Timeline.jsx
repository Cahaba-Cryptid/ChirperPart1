import React from 'react';

const Timeline = (props) => {
    return (
        <div className="row m-3">
            {props.chirps.map((chirp, index) => {
                return (
                    <div className="col-12" key={index}>
                        <div className="card m-2 border border-secondary">
                            <p className="pt-3 pl-3 pr-3">{chirp.chirp}</p>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}


export default Timeline;