import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("پیام شما آماده ارسال است.");
  };

  return (
    <main dir="rtl" className="bg-white">

      {/* Header */}
      <section className="container mx-auto px-4 pb-16 pt-20 md:pt-28 bg-yellow-500">
        <div className="max-w-3xl mx-auto">
          <p
            data-aos="fade-up"
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-100"
          >
تماس با ما            </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl"
          >
            با ما در ارتباط باشید
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-2xl text-base leading-8 text-gray-100 md:text-lg"
          >
            برای همکاری، پروژه‌های طراحی لباس، استایلینگ یا هر سوالی که دارید،
            خوشحال می‌شویم از شما بشنویم.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 pb-24 mt-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Contact Info */}
          <div data-aos="fade-left" className="order-2 lg:order-1 p-6">

            <h2 className="mb-8 text-2xl font-semibold text-gray-900">
              اطلاعات تماس
            </h2>

            <div className="space-y-8">

              <div>
                <p className="mb-2 text-sm text-gray-400">
                  ایمیل
                </p>

                <a
                  href="mailto:your@email.com"
                  className="text-lg text-gray-900 transition hover:opacity-50"
                >
                  your@email.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-400">
                  اینستاگرام
                </p>

                <a
                  href="#"
                  className="text-lg text-gray-900 transition hover:opacity-50"
                >
                  Instagram
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-400">
                  ساعت پاسخگویی
                </p>

                <p className="text-lg text-gray-900">
                  شنبه تا چهارشنبه — ۹ تا ۱۸
                </p>
              </div>

            </div>
          </div>

          {/* Form */}
          <div
            data-aos="fade-right"
            className="order-1 rounded-3xl bg-gray-50 p-6 md:p-10 lg:order-2"
          >
            <h2 className="mb-8 text-2xl font-semibold text-gray-900">
              پیام خود را ارسال کنید
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-500"
                >
                  نام
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-gray-400"
                  placeholder="نام شما"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-500"
                >
                  ایمیل
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-gray-400"
                  placeholder="ایمیل شما"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-500"
                >
                  پیام
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-gray-400"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-black px-6 py-4 font-medium text-white transition hover:opacity-80"
              >
                ارسال پیام
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;