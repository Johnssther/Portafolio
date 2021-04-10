import './header.scss';

function ProgressbarLinear() {
  return (
    <section className="progress-bar">
        <div className="progress-bar__progress">
            <span style={{width:'0'}}></span>
        </div>
    </section>
  );
}

export default ProgressbarLinear;
