import React from 'react';
import CarouselContainer from '../../../components/CarouselContainer';
import '../../../App.css';
import { useTranslation } from "react-i18next";




function Acceuil() {
    const { t, i18n } = useTranslation();
    
    return (
        <div>
            <section className="grande">
                <CarouselContainer/>
                <section className="section1">
                    <img className="section1__fond" src="images/images_site/sanfrancisco.jpg" alt="img_acceuil"/>
                    <div className="section1__desc">
                        <p>{t('paragraphe')}</p>
                        <button className="section1__desc__button">Voir l'article <img src="images/images_site/flecheblanchedroite.png" alt=""/></button>
                    </div>
                </section>
                <section className="article">
                    <div className="article__titre">
                        <img src="images/images_site/ico_epingle.png" alt="epingle"/>
                        <p>JE SUIS UN GRAND VOYAGEUR</p>
                    </div>
                    <div className="article__texte">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, 
                            doloremque quidem alias quaerat pariatur repudiandae cupiditate 
                            consequatur ratione. Possimus sit deserunt fugiat nihil ut error,
                            molestiae, ex corrupti tempora obcaecati ratione animi libero ullam, 
                            maiores odit nisi sed laudantium totam voluptatem ipsa? Itaque, nobis? 
                            Natus quidem exercitationem tenetur itaque unde laboriosam sunt rem 
                            excepturi reprehenderit fugiat, iste magni eius cum corporis soluta repellat, 
                            tempora qui quibusdam hic sint! Doloribus animi fugiat, aspernatur alias 
                            autem officia tenetur mollitia minus distinctio quidem incidunt tempore 
                            explicabo iusto odio fuga. Explicabo laboriosam quo minus dolores. 
                            Est voluptate hic nostrum saepe, quod dignissimos vitae ipsam nobis aliquam
                            sit in inventore? Sed itaque ab minus porro provident exercitationem quia 
                            molestias velit vel maxime aliquam unde, recusandae numquam ducimus veniam
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, 
                            doloremque quidem alias quaerat pariatur repudiandae cupiditate 
                            consequatur ratione. Possimus sit deserunt fugiat nihil ut error,
                            molestiae, ex corrupti tempora obcaecati ratione animi libero ullam, 
                            maiores odit nisi sed laudantium totam voluptatem ipsa? Itaque, nobis? 
                            Natus quidem exercitationem tenetur itaque unde laboriosam sunt rem 
                            excepturi reprehenderit fugiat, iste magni eius cum corporis soluta repellat, 
                            tempora qui quibusdam hic sint! Doloribus animi fugiat, aspernatur alias 
                            autem officia tenetur mollitia minus distinctio quidem incidunt tempore 
                            explicabo iusto odio fuga. Explicabo laboriosam quo minus dolores. 
                            Est voluptate hic nostrum saepe, quod dignissimos vitae ipsam nobis aliquam
                            sit in inventore? Sed itaque ab minus porro provident exercitationem quia 
                            molestias velit vel maxime aliquam unde, recusandae numquam ducimus veniam
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, 
                            doloremque quidem alias quaerat pariatur repudiandae cupiditate 
                            consequatur ratione. Possimus sit deserunt fugiat nihil ut error,
                            molestiae, ex corrupti tempora obcaecati ratione animi libero ullam, 
                            maiores odit nisi sed laudantium totam voluptatem ipsa? Itaque, nobis? 
                            Natus quidem exercitationem tenetur itaque unde laboriosam sunt rem 
                            excepturi reprehenderit fugiat, iste magni eius cum corporis soluta repellat, 
                            tempora qui quibusdam hic sint! Doloribus animi fugiat, aspernatur alias 
                            autem officia tenetur mollitia minus distinctio quidem incidunt tempore 
                            explicabo iusto odio fuga. Explicabo laboriosam quo minus dolores. 
                            Est voluptate hic nostrum saepe, quod dignissimos vitae ipsam nobis aliquam
                            sit in inventore? Sed itaque ab minus porro provident exercitationem quia 
                            molestias velit vel maxime aliquam unde, recusandae numquam ducimus veniam
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eveniet, voluptates temporibus sequi incidunt accusamus animi accusantium alias dolore magni.
                        </p>

                    </div>
                    <img src="images/images_site/ico_top.png" className="article__flottant" alt=""/>
                </section>
                <section className="ascide">
                    <img className ="ascide_bulle" src="images/images_site/bulle.png" alt=""/>
                    <div className="ascide__tit">
                        <p>A PROPOS DE L'AUTEUR</p>
                        <img src="images/images_site/zozor_classe.png" alt="zozor"/>

                    </div>
                    <div className="ascide__para">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae similique facere assumenda? Veniam, officia.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci earum odit repudiandae possimus eos, rem nisi reprehenderit neque, ducimus, nobis dignissimos est vero deserunt?
                        </p>
                    </div>
                    <div className="ascide__icone">
                        <img src="images/images_site/facebook.png" alt=""/>
                        <img src="images/images_site/twitter.png" alt=""/>
                        <img src="images/images_site/vimeo.png" alt=""/>
                        <img src="images/images_site/flickr.png" alt=""/>
                        <img src="images/images_site/rss.png" alt=""/>
                    </div>
                </section>
            </section>

            <footer className="footer">
                <div className="footer__elmt1">
                    <p className="footer__elmt1__titre">MON DERNIER SWEET</p>
                    <p>Hii haaaaaaa!</p>
                    <p>le 12 mai a 23h12</p>
                </div>
                <div className="footer__elmt2">
                    <p className="footer__elmt2__titre">MES PHOTOS</p>
                    <img src="images/images_site/photo1.jpg" alt=""/>
                    <img src="images/images_site/photo2.jpg" alt=""/>
                    <img src="images/images_site/photo3.jpg" alt=""/>
                    <img src="images/images_site/photo4.jpg" alt=""/>
                </div>
                <div className="footer__elmt3">
                    <p className="footer__elmt3__titre">MES AMIS</p>
                    <div class="footer__elmt3__partie">
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                        <p><img src="images/images_site/ico_liensexterne.png" alt="lien"/>Landry</p>
                    </div>
                </div>
            </footer>

                
        </div>
    )
}

export default Acceuil;

