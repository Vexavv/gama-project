import React from 'react';
import styles from './ContentPage.module.css'
import Container from "../Container/Container";

function ContentPage(props) {
    return (
        <div className={styles.content}>
            <Container>
                <h2>Who we are</h2>
                <p>
                    Pellentesque tempus a feugiat a vitae. Ullamcorper eget sit augue enim ligula interdum. Quis
                    scelerisque aliquam tristique nam. Amet, porta diam senectus donec amet eros nulla sagittis. Neque
                    faucibus id tellus sit. Tortor tincidunt nunc purus pulvinar augue aenean netus feugiat.
                    Pellentesque morbi pulvinar amet, massa lectus adipiscing quis tristique. Pellentesque dui tempor
                    non enim gravida nec enim consectetur. Ut sit dictumst tellus at vitae massa pharetra risus. Enim
                    integer massa, purus nec, iaculis a arcu. Fringilla arcu molestie sed est, iaculis diam. Mi tortor
                    ultricies morbi neque bibendum in maecenas non. Morbi justo, fringilla amet morbi varius aliquam ut.
                    Dui, blandit cras enim amet, vitae. Lorem volutpat felis pharetra, morbi amet sed at velit, lacus.
                    Urna, quam dui, morbi id arcu non, duis. Quam turpis vitae pellentesque malesuada viverra netus
                    metus eleifend. Nulla enim lectus tellus nunc quis enim mi. Metus ac laoreet enim, amet amet
                    imperdiet tempor. Condimentum at enim, cras nulla mattis. Elit sapien mauris risus, consectetur
                    posuere nunc habitasse aenean pellentesque. Diam malesuada ut sit at tincidunt. Sit mi pellentesque
                    magna ridiculus amet laoreet neque enim sagittis. Fermentum, sed sit lobortis nunc sit volutpat sem.
                    Ac varius vitae donec neque at est sed tristique sed.
                </p>

                <h3>Our contests </h3>
                <p>You can create not one but as many as six teams for a single match. You can dish out various team
                    combinations, employ captains, predict the best player of the match, pick your favourite bowling
                    pair, and whatnot.</p>
                <p> Not only you can join contests and challenge others’ skills but also create your
                    own contest and invite your friends and family.</p>
                <h3>Cash contests</h3>
                <p>There are three types of contests that help you win cash prizes: Small, Mega and Private.</p>
                <p>The Small and Mega contests have a fixed entry fee designed by our management team. Although you can
                    create teams for free, you’ll have to pay an entry fee when you join a contest. For example, you
                    have to pay three entry fees if you create three teams for a contest. On the other hand, it is you
                    who decides the entry fees and cash prizes for the Private contests. You can invite your friends and
                    family to compete.</p>
                <h3>Practice contests</h3>
            </Container>
        </div>
    );
}

export default ContentPage;