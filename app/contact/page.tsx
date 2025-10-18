"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@/lib/validation/contactFormSchema";
import { submitContactForm } from "@/actions/contact/contactAction";
import { z } from "zod";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function Contact() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].contact.form;
  const sms = translations[language].contact.form.smsConsent;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;

    if (e.target instanceof HTMLInputElement && type === "checkbox") {
      setFormData({ ...formData, [id]: e.target.checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    setErrors({ ...errors, [id]: "" });
  };

  const handleInsuranceChange = (value: string) => {
    setFormData({ ...formData, insuranceType: value });
    setErrors({ ...errors, insuranceType: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Clear previous errors
    setErrors({});

    setIsLoading(true);
    try {
      // Prepare data for validation
      const validationData = { ...formData };
      await contactFormSchema.parseAsync(validationData);

      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, String(value));
      });

      const result = await submitContactForm({}, payload);
      if (result.status === "SUCCESS") {
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto pronto.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          insuranceType: "",
          message: "",
          consent: false,
        });
        setErrors({});
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.flatten().fieldErrors;
        const errorMessages = Object.fromEntries(
          Object.entries(fieldErrors).map(([key, value]) => [
            key,
            value?.[0] ?? "",
          ])
        );
        setErrors(errorMessages);
        
        // Show specific error message for the first field with an error
        const firstError = Object.values(errorMessages)[0];
        toast({
          title: "Please fix the following issues:",
          description: firstError,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Error",
          description: "There was a problem submitting your form. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 mt-3">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {translations[language].contact.title}
          </h2>
          <p className="text-lg text-gray-600">
            {translations[language].contact.subtitle}
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">{t.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insuranceType">{t.insuranceType} *</Label>
                  <Select
                    onValueChange={handleInsuranceChange}
                    value={formData.insuranceType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aca">{t.types.aca}</SelectItem>
                      <SelectItem value="medicare">
                        {t.types.medicare}
                      </SelectItem>
                      <SelectItem value="family">{t.types.family}</SelectItem>
                      <SelectItem value="individual">
                        {t.types.individual}
                      </SelectItem>
                      <SelectItem value="other">{t.types.other}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.insuranceType && (
                    <p className="text-sm text-red-500">{errors.insuranceType}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.message} *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Please describe your insurance needs or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  <span dangerouslySetInnerHTML={{ __html: sms }} />
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-500">{errors.consent}</p>
              )}
              <div className="text-sm text-gray-600">
                <p className="mb-2">
                  <span className="text-red-500">*</span> Required fields
                </p>
                <p className="mt-4 flex justify-between">
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 underline mr-4"
                  >
                    {translations[language].footer.links.privacy}
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="text-blue-600 underline"
                  >
                    {translations[language].footer.links.terms}
                  </Link>
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> {t.submit}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> {t.submit}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
