"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, Brain, CheckCircle, Database, LucideProps, Settings, Target } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react"

type IconType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

type Step = {
  number: string,
  title: string,
  description: string
  icon: IconType,
  isResult?: boolean,
}

const steps = [
  {
    number: "1️⃣",
    title: "Data Collection",
    description:
      "We gather alternative data — telecom activity, utility payments, purchase intent, asset ownership, and local economic signals.",
    icon: Database,
  },
  {
    number: "2️⃣",
    title: "Preprocessing",
    description: "Data is cleaned, validated, and structured for high-quality AI input.",
    icon: Settings,
  },
  {
    number: "3️⃣",
    title: "AI/ML Scoring",
    description:
      "Our machine learning models analyze patterns to predict creditworthiness, even without formal history.",
    icon: Brain,
  },
  {
    number: "4️⃣",
    title: "Smart Decisions",
    description: "Lenders receive clear scoring and insights to approve more clients with less risk.",
    icon: Target,
  },
  {
    number: "✅",
    title: "Result",
    description: "Safer, faster lending. More financial access for the underbanked.",
    icon: CheckCircle,
    isResult: true,
  },
]

export default function HowMoliyWorks() {

  return (
    <section className=" border-b border-border/40 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans"
            style={{ color: "#1e1b50" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Moliy.AI Works
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#4a4a4a" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our AI-powered credit scoring process transforms alternative data into actionable insights for smarter
            lending decisions.
          </motion.p>
        </motion.div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon

            return (
              <Step key={index} step={step} index={index} IconComponent={IconComponent} steps={steps} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Step({ step, index, IconComponent, steps }: { step: Step, index: number, IconComponent: IconType, steps: Step[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      key={index}
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
    >
      {/* Step Card */}
      <motion.div
        className={`bg-white rounded-2xl p-8 h-full border transition-all duration-300 group ${step.isResult
          ? "border-green-200 bg-green-50 shadow-lg hover:shadow-xl"
          : "border-gray-100 shadow-lg hover:shadow-xl"
          }`}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        {/* Step Number with Gradient */}
        <div className="mb-6">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4"
            style={{
              background: step.isResult
                ? "linear-gradient(135deg, #10b981 0%, #34d399 100%)"
                : "linear-gradient(135deg, #1e1b50 0%, #a084d6 100%)",
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.3,
              ease: "easeOut",
            }}
          >
            {step.isResult ? "✓" : index + 1}
          </motion.div>
        </div>

        {/* Icon */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.4,
            delay: index * 0.2 + 0.4,
          }}
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(30, 27, 80, 0.1)" }}
          >
            <IconComponent className="w-6 h-6" style={{ color: "#1e1b50" }} />
          </div>
        </motion.div>

        {/* Content */}
        <motion.h3
          className="text-2xl font-bold mb-4 font-sans"
          style={{
            background: "linear-gradient(135deg, #1e1b50 0%, #a084d6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.6,
          }}
        >
          {step.title}
        </motion.h3>
        <motion.p
          className="leading-relaxed text-base"
          style={{ color: "#4a4a4a" }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.7,
          }}
        >
          {step.description}
        </motion.p>
      </motion.div>

      {/* Connecting Arrow (desktop only) */}
      {index < steps.length - 1 && (
        <motion.div
          className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.2 + 0.8,
          }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
            style={{
              background: "linear-gradient(135deg, #1e1b50 0%, #a084d6 100%)",
            }}
          >
            <ArrowRight className="w-3 h-3 text-white" />
          </div>
        </motion.div>
      )}

      {/* Curved connector for mobile */}
      {index < steps.length - 1 && (
        <motion.div
          className="lg:hidden flex justify-center py-6"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.2 + 0.8,
          }}
        >
          <div className="flex flex-col items-center">
            <div
              className="w-1 h-8 rounded-full"
              style={{
                background: "linear-gradient(180deg, #1e1b50 0%, #a084d6 100%)",
              }}
            ></div>
            <div
              className="w-3 h-3 rounded-full mt-2"
              style={{
                background: "linear-gradient(135deg, #1e1b50 0%, #a084d6 100%)",
              }}
            ></div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
