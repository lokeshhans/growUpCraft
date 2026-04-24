import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json())

// ─── MongoDB Schema ───────────────────────────────────────────────────────────
const contactSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  phone:        { type: String, required: true },
  businessType: String,
  projectType:  String,
  message:      String,
  createdAt:    { type: Date, default: Date.now },
  status:       { type: String, default: 'new' }, // new | contacted | converted
})

const Contact = mongoose.model('Contact', contactSchema)

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'GrowUp Craft API is running' })
})

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, businessType, projectType, message } = req.body

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' })
    }

    // Save to MongoDB
    const contact = new Contact({ name, phone, businessType, projectType, message })
    await contact.save()

    // Optional: Send WhatsApp notification via Twilio or similar
    // await sendWhatsAppNotification(contact)

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      id: contact._id,
    })
  } catch (err) {
    console.error('Contact form error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get all contacts (admin)
app.get('/api/contacts', async (req, res) => {
  try {
    // In production, add auth middleware here
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

// Update contact status
app.patch('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    )
    res.json(contact)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contact' })
  }
})

// ─── Server Start ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/growupcraft'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => {
      console.log(`🚀 GrowUp Craft API running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message)
    // Still start server even without DB (for demo)
    app.listen(PORT, () => {
      console.log(`🚀 Server running (no DB) on http://localhost:${PORT}`)
    })
  })
