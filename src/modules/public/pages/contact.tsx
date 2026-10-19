// apps/web/src/routes/contact.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/schemas/contact";
import { Spinner } from "#/components/shared/spinner.tsx";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@eventspree.ng",
    href: "mailto:hello@eventspree.ng",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 903 298 0552",
    href: "tel:+2349032980552",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Rumuagholu road, Port Harcourt, Rivers State, Nigeria",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9:00am – 6:00pm WAT",
  },
];

export const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: wire to POST /api/contact once backend route exists
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col">
      {/* ── Page header ── */}
      <section className="bg-neutral-50">
        <div className="layout-container pb-10! text-center flex flex-col items-center gap-3">
          <h1 className="heading-1">Get in Touch</h1>
          <p className="prose-body max-w-md">
            Have a question, feedback, or need help with a booking? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Two-column: form + contact info ── */}
      <section className="bg-neutral-0">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left — form */}
            <div className="flex-1">
              {isSubmitSuccessful ? (
                <div className="banner-success">
                  Thanks for reaching out! We'll get back to you within 1–2 business days.
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div>
                    <label className="label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className={errors.name ? "input-error" : "input"}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="error-text">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "input-error" : "input"}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="error-text">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register("subject")}
                      className={errors.subject ? "input-error" : "input"}
                      placeholder="What's this about?"
                    />
                    {errors.subject && <p className="error-text">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "input-error" : "input"}
                      placeholder="Tell us more..."
                    />
                    {errors.message && <p className="error-text">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary justify-center"
                  >
                    {isSubmitting && <Spinner size="sm" color="white" />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Right — contact info */}
            <div className="w-full md:w-90 shrink-0">
              <div className="card flex flex-col gap-6">
                {CONTACT_DETAILS.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary-50 text-primary-600 shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="caption">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="prose-default link-muted">
                          {item.value}
                        </a>
                      ) : (
                        <span className="prose-default text-neutral-800">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
