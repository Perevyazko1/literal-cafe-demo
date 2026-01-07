'use client'

import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className=" border-t border-gray-200 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          <div>
            <h3 className="text-2xl font-light mb-4 text-gray-900">Литературное Кафе</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              В сердце города, с городом в сердце с 1834 года.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-900 mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>📧 welcome@literalcafe.com</li>
              <li>📞 +7 (999) 123-45-67</li>
              <li>📍 Россия, 191181, Санкт-Петербург, Невский пр., 18</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-900 mb-4">Следите за нами</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Facebook</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Литературное Кафе. Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  )
}
