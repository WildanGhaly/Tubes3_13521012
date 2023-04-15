import './SideBar.css';
import Radio from '../../Components/Radio.js';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <button className="my-button"> + New Chat </button>
            </div>
            <Radio></Radio>
        </div>
    );
}

export default SideBar;