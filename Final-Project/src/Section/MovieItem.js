import { Card } from 'antd';
import 'antd/dist/antd.css';
import { useHistory} from 'react-router-dom';

const { Meta } = Card;
const MovieItem = (props) => {
    const history = useHistory();
    const movieDetail = () => {
        history.push(`/movie/detail/${props.id}`);
    }
    return (
        <>
            <Card onClick={() => {movieDetail()}}
                hoverable
                style={{ width: 240, height : 500 }}
                cover={<img alt="example" style={{height: 340, objectFit : "cover"}} src={props.image_url}  />}>
                <Meta title={props.title} description={props.genre} />
                <Meta  description={props.duration + " Minute"} />
                <Meta  description={"Year Release : " + props.year} />
            </Card>
        </>
    );
}

export default MovieItem;