import scss from "./map_form.module.scss";

const Map_form = () => {
  return (
    <div className={scss.mapForm}>
      <div className="container">
        <div className={scss.mapForm__elements}>
          <div className={scss.mapForm__elements_col1}>
            <div className={scss.map} data-aos="fade-up-right">
              {/* <iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36436.3590327224!2d69.22648206127761!3d41.30390400192779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8afc5ecd0a29%3A0x2ff89e41e2381d4f!2sNEXT%20MALL!5e0!3m2!1sru!2s!4v1690799414742!5m2!1sru!2s"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3104.472378174517!2d65.79640461691929!3d38.83663871991241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUwJzExLjQiTiA2NcKwNDcnNDcuNSJF!5e0!3m2!1sru!2s!4v1691735889056!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className={scss.mapForm__elements_col2} data-aos="fade-up-left">
            <h2>У вас остались вопросы?</h2>
            <p>
              Остались вопросы? Напишите нам и наши специалисты ответят вам в
              течение 30 минут!
            </p>
            <form action="">
              <input type="text" placeholder="Ваше  имя..." />
              <input type="text" placeholder="Ваш телефон..." />
              <input type="text" placeholder="Ваш вопрос..." />
              <button type="submit">Отправить сообщение</button>
              <p>
                Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map_form;
