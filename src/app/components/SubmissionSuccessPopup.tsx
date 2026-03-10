import { CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SubmissionSuccessPopupProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export function SubmissionSuccessPopup({ open, title, message, onClose }: SubmissionSuccessPopupProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#020617]/70 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl border border-[#2A426A] bg-[#0D1A31] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close success popup"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-lg p-1.5 text-[#94A3B8] transition-colors hover:bg-[#13233F] hover:text-[#E5E7EB]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-white">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#94A3B8]">{message}</p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

