import './Radio.css';

function Radio() {
    return (
        <div className="user-radio-button">
            <input type="radio" id="kmp" name="algorithm" value="kmp" checked />
            <label htmlFor="kmp">KMP</label>
            <input type="radio" id="bm" name="algorithm" value="bm" />
            <label htmlFor="bm">BM</label>
        </div>
    );
}

export default Radio;