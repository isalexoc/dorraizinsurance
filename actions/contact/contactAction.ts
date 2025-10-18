"use server";
import nodemailer from "nodemailer";
import { parseServerActionResponse } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validation/contactFormSchema";

export const submitContactForm = async (_: any, formData: FormData) => {
  try {
    const data = Object.fromEntries(formData.entries());
    
    // Convert consent string to boolean if present
    if (data.consent !== undefined) {
      data.consent = data.consent === 'true' || data.consent === true;
    }

    const parsed = contactFormSchema.parse(data);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER_INFO,
        pass: process.env.EMAIL_PASS_INFO,
      },
    });

    const date = new Date().toLocaleString();

    await transporter.sendMail({
      from: `"Info | Dorraiz Insurance" <${process.env.EMAIL_USER_INFO}>`,
      to: process.env.EMAIL_USER_INFO,
      subject: `New Contact Form Submission from ${parsed.name}`,
      html: `
        <h2>Contact Form Submission - Dorraiz Insurance</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Name:</strong> ${parsed.name}</p>
        <p><strong>Email:</strong> ${parsed.email}</p>
        <p><strong>Phone:</strong> ${parsed.phone}</p>
        <p><strong>Insurance Type:</strong> ${parsed.insuranceType}</p>
        <p><strong>Message:</strong><br>${parsed.message}</p>
      `,
    });

    return parseServerActionResponse({ status: "SUCCESS", error: "" });
  } catch (error: any) {
    console.error("Contact form error:", error);

    return parseServerActionResponse({
      status: "ERROR",
      error: error?.message || "Something went wrong",
    });
  }
};
