import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: ICategory;
  user: IUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber?: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export interface IReceivedClaimRequest {
  claimRequests: {
    map(
      arg0: (claimRequest: {
        claimant: any;
        answer: any;
        description: any;
        _id: any;
      }) => import("react").JSX.Element,
    ): import("react").ReactNode;

    claimant: any;
    answer: string[];
    description: string;
    _id: string;
  };
  title: string;
  dateFound: string;
  description: string;
  location: string;
  city: string;
  _id: string;
  images: string[];
}

export type CourseInput = {
  title: string;
  duration: number;
  price: number;
  instructor?: string;
  startDate: Date;
  endDate: Date;
};

export type TCourseData = {
  videoUrls: any;
  content: string;
  isActive: any;
  title: string;
  description: string;
  duration: number;
  price: number;
  instructor?: {
    name: string;
    email?: string;
  };
  startDate: string;
  endDate: string;
};
