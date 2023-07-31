const Status = ({ inView })=> {
  return (
    <div  className="status">
      <div >
        {inView ? (
          <span>
            ✅
          </span>
        ) : (
          <span>
            ❌
          </span>
        )}
      </div>
    </div>
  );
}

export default Status;
