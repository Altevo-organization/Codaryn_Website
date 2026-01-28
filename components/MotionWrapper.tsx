"use client";

import { motion, type MotionProps, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const slideRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export function MotionDiv({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  variants = defaultVariants,
  ...props
}: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  ...props
}: MotionWrapperProps) {
  return (
    <MotionDiv
      className={className}
      delay={delay}
      duration={duration}
      once={once}
      variants={fadeVariants}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.4,
  once = true,
  ...props
}: MotionWrapperProps) {
  return (
    <MotionDiv
      className={className}
      delay={delay}
      duration={duration}
      once={once}
      variants={scaleVariants}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

export function SlideLeft({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  ...props
}: MotionWrapperProps) {
  return (
    <MotionDiv
      className={className}
      delay={delay}
      duration={duration}
      once={once}
      variants={slideLeftVariants}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

export function SlideRight({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  ...props
}: MotionWrapperProps) {
  return (
    <MotionDiv
      className={className}
      delay={delay}
      duration={duration}
      once={once}
      variants={slideRightVariants}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: MotionWrapperProps & { staggerDelay?: number }) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: Omit<MotionWrapperProps, "delay">) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={defaultVariants}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
