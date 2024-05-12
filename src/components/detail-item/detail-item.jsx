import { Link } from 'react-router-dom';
import './detail-item.css';

export default function DetailItem({item}) {
    //각 item을 받아서 사용
    return(
        <div className = 'detail-item-container'>
            <div className ='img-box'>
                <img src = {item?.image_url} alt = '레시피' className = 'img-style'/>
            </div>
            <div>
                <span className = 'text-publisher'>{item?.publisher}</span>
                <h3 className = 'text-title'>{item?.title}</h3>
                <Link to = {`/detail/${item?.id}`} className = 'link-detail'>상세보기</Link>
            </div>
        </div>
    )
}