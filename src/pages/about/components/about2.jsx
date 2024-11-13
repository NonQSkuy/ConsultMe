import React from "react";

const About2 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
          Tentang Kami
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          Kami Hadir untuk Mempermudah Akses ke Konsultasi Psikolog yang
          Terjangkau dan Nyaman untuk Semua Orang
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          Kami percaya bahwa setiap individu berhak mendapatkan dukungan
          kesehatan mental yang profesional dan terpercaya. Dengan platform
          kami, Anda dapat mengakses layanan psikolog kapan saja dan di mana
          saja, menghadirkan solusi yang fleksibel dan aman dalam mendukung
          kesejahteraan mental.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src="https://media.istockphoto.com/id/1390560381/id/foto/pebisnis-multi-etnis-mengadakan-pertemuan-bisnis.jpg?s=612x612&w=0&k=20&c=7x9dUPJVmQTsQwb6OI095cSm9jT4_Ly4PUPO0qDNUwU="
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full"
          src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Kisah Kami
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            Platform ini lahir dari keyakinan bahwa kesehatan mental adalah
            prioritas. Dengan berkembangnya kebutuhan layanan psikologis, kami
            menciptakan layanan konsultasi online untuk memudahkan siapa saja
            mendapatkan dukungan profesional yang nyaman dan aman tanpa harus
            meninggalkan rumah.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Kami mengerti bahwa setiap perjalanan kesehatan mental adalah unik.
            Oleh karena itu, kami menyediakan berbagai layanan yang dapat
            disesuaikan dengan kebutuhan Anda, didukung oleh tim psikolog
            berpengalaman yang siap membantu dalam setiap langkah perjalanan
            Anda menuju kesejahteraan.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2">
          <img
            className="lg:block hidden w-full"
            src="https://akcdn.detik.net.id/visual/2021/08/05/ilustrasi-konsultasi-online_169.jpeg?w=650"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/9g2R7Xr/Group-803.png"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About2;
