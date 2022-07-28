import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-72 flex flex-col">
        <h1 className="mt-4 dark:text-white text-center text-3xl font-bold">
          Acerca de Mí
        </h1>
        <h3 className="mt-12 dark:text-white font-bold">hola</h3>
        <h1 className="mt-1 dark:text-white text-3xl font-bold">
          ¡Soy Felix Ochoa, <br />
          Un ingeniero de sistemas, desarrollador frontend y conocimientos
          básicos en backend!
          <br />
        </h1>
        <p className="mt-8 dark:text-white text-sm">
          Me encanta trabajar con React, JavaScript, PHP, flutter, aunque
          también he trabajado con lenguajes como C, C++, C#, Java, que son más
          bien a otro propósito. He diseñado y desarrollado aplicaciones de
          escritorio, móvil y web, utilizando con ellas arquitecturas y patrones
          de diseño, tales como el patron SOLID, la arquitectura MVC.
        </p>
        <div className="mt-8 flex flex-col w-full h-64 items-center">
          <img
            className="rounded-full h-full"
            src="https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/271504754_642731727077796_7573467970821529678_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGQcFbUmu-5TAfcoin2aUFC8r16mFHqCcvyvXqYUeoJy9pkEs8XMXcKlvrUXpoJ6TxB71zRqqQz0J_lRnWKJLay&_nc_ohc=77T4FnJfbysAX_vQd--&_nc_ht=scontent.feoh1-1.fna&oh=00_AT_eZ3kSIZaohHuSKcX-D_ktOnl1rBJWxMrDvRC2GVPuVA&oe=62E8000C"
            alt="programador junior"
          />
        </div>
        <h3 className="mt-8 dark:text-white font-bold">mis estudios</h3>
        <h1 className="mt-1 dark:text-white text-2xl font-bold">
          - Universidad Popular del Cesar
        </h1>
        <div className="mt2-2 flex flex-col">
          <p className="mt-2 dark:text-white text-sm">
            <span className="font-bold">
              <span className="dark:text-gray-200">2018 - </span>
              <span className="dark:text-gray-200">En Curso</span>
            </span>
            <br />
            <span className="font-normal">
              <span className="text-gray-500">Ingeniería en Sistemas</span>
            </span>
          </p>
        </div>
        <h1 className="mt-8 dark:text-white text-2xl font-bold">
          - Escuela de Administración Pública
        </h1>
        <div className="mt2-2 flex flex-col">
          <p className="mt-2 dark:text-white text-sm">
            <span className="font-bold">
              <span className="dark:text-gray-200">2021</span>
            </span>
            <br />
            <span className="font-normal">
              <span className="text-gray-500">
                Diplomado en Proyectos de desarrollo
              </span>
              <br />
              <span className="text-gray-500">Diplomado en MIPG</span>
            </span>
          </p>
        </div>
        <div className="mt-8 flex flex-row"> </div>
      </div>
    </div>
  );
};

export default AboutMe;
