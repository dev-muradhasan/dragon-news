
import swimmingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playGroundImage from '../../assets/playground.png'

const Qzone = () => {
    return (
      <div className='bg-base-200 p-3'>
        <h2 className="font-semibold text-xl text-accent-content">Q-zone</h2>
        <div className='mt-3 space-y-4'>
            <img src={swimmingImage} alt="" />
            <img src={classImage} alt="" />
            <img src={playGroundImage} alt="" />
        </div>
      </div>
    );
};

export default Qzone;