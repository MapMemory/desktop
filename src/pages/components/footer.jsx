import '../../styles/pages/components/footer.scss'
import { useHistory } from "react-router-dom";

import Person from '../../utils/person.jsx';
import Electron from '../../utils/electron.js';

export default () => {
    let person = new Person();
    let electron = new Electron();
    const history = useHistory();

    return (
        <div style={{ backgroundColor: person.getThemeColors().headerColorPrimary.backgroundColor, borderColor: person.getThemeColors().headerColorPrimary.backgroundColor }} id="footer">
            <div className="container">
                <div className="columns">
                    <div className="group-columns">
                        <span className="copyright" style={person.getThemeColors().text}>© 2021 MapMemory.</span>
                        <br />
                        <div style={person.getThemeColors().text}>Быстро и просто - это наша общая цель.</div>
                        <div style={person.getThemeColors().text}>Для связи с нами используйте Email.</div>
                    </div>
                    <div className="column">
                        <strong style={person.getThemeColors().text}>Компания</strong>
                        <ul>
                            <li onClick={() => { history.push("/map"); }} style={person.getThemeColors().text}>Карта</li>
                            <li onClick={() => { history.push("/themes"); }} style={person.getThemeColors().text}>Палитры</li>
                            <li onClick={() => { history.push("/about"); }} style={person.getThemeColors().text}>О нас</li>
                            <li onClick={() => { history.push("/privacy"); }} style={person.getThemeColors().text}>Наша политика</li>
                        </ul>
                    </div>
                    <div className="column">
                        <strong style={person.getThemeColors().text}>Скачать</strong>
                        <ul>
                            <li onClick={() => { history.push("/download"); }} style={person.getThemeColors().text}>ПК</li>
                            <li onClick={() => { history.push("/download"); }} style={person.getThemeColors().text}>Смартфон</li>
                        </ul>
                    </div>
                    <div className="column">
                        <strong style={person.getThemeColors().text}>Социальное</strong>
                        <ul>
                            <li onClick={() => { electron.createWindowTwitter() }} style={person.getThemeColors().text}>Twitter</li>
                            <li onClick={() => { electron.createWindowGitHub() }} style={person.getThemeColors().text}>GitHub</li>
                        </ul>
                    </div>
                    <div className="column">
                        <strong style={person.getThemeColors().text}>Помощь</strong>
                        <ul>
                            <li onClick={() =>
                                electron.createWindowMailto("mapmemory@protonmail.com", "Кратко о проблеме", "Подробнее о проблеме")
                            } style={person.getThemeColors().text}>Служба поддержки</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}