"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Save, X, Settings, Type, ImageIcon, Layout, Palette, Eye, EyeOff } from "lucide-react"

interface CMSOverlayProps {
  isActive: boolean
  onClose: () => void
}

export default function CMSOverlay({ isActive, onClose }: CMSOverlayProps) {
  const [editingElement, setEditingElement] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")
  const [showOutlines, setShowOutlines] = useState(true)

  useEffect(() => {
    if (isActive) {
      // Add CMS styles to body
      document.body.classList.add("cms-active")

      // Add click handlers to editable elements
      const editableElements = document.querySelectorAll("[data-cms-editable]")
      editableElements.forEach((element) => {
        element.addEventListener("click", handleElementClick)
        if (showOutlines) {
          const el = element as HTMLElement
          el.style.outline = "2px dashed #f97316"
          el.style.outlineOffset = "2px"
        }
      })

      return () => {
        document.body.classList.remove("cms-active")
        editableElements.forEach((element) => {
          element.removeEventListener("click", handleElementClick)
          const el = element as HTMLElement
          el.style.outline = ""
          el.style.outlineOffset = ""
        })
      }
    }
  }, [isActive, showOutlines])

  const handleElementClick = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()

    const element = e.target as HTMLElement
    const editableId = element.getAttribute("data-cms-editable")
    if (editableId) {
      setEditingElement(editableId)
      setEditValue(element.textContent || element.innerHTML || "")
    }
  }

  const handleSave = () => {
    if (editingElement) {
      const element = document.querySelector(`[data-cms-editable="${editingElement}"]`)
      if (element) {
        if (element.tagName === "IMG") {
          ;(element as HTMLImageElement).src = editValue
        } else {
          element.textContent = editValue
        }
      }
      setEditingElement(null)
      setEditValue("")
    }
  }

  const handleCancel = () => {
    setEditingElement(null)
    setEditValue("")
  }

  if (!isActive) return null

  return (
    <>
      {/* CMS Toolbar */}
      <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white p-3 z-[9999] shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-white text-orange-500">
              CMS Editor Active
            </Badge>
            <span className="text-sm">Click on any highlighted element to edit</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowOutlines(!showOutlines)}
              className="text-white hover:bg-orange-600"
            >
              {showOutlines ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showOutlines ? "Hide Outlines" : "Show Outlines"}
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-orange-600">
              <X className="h-4 w-4" />
              Exit CMS
            </Button>
          </div>
        </div>
      </div>

      {/* Editing Modal */}
      {editingElement && (
        <div className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Edit className="mr-2 h-5 w-5" />
                Edit Content: {editingElement}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Content:</label>
                <Textarea value={editValue} onChange={(e) => setEditValue(e.target.value)} rows={6} className="mt-1" />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* CMS Sidebar */}
      <div className="fixed right-0 top-16 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-xl z-[9998] overflow-y-auto border-l">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">CMS Tools</h3>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Type className="mr-2 h-4 w-4" />
                  Text Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Headlines and titles</p>
                <p>• Paragraphs and descriptions</p>
                <p>• Button text</p>
                <p>• Navigation labels</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Images
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Hero banners</p>
                <p>• Product images</p>
                <p>• Gallery photos</p>
                <p>• Company logos</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Layout className="mr-2 h-4 w-4" />
                  Layout
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Section visibility</p>
                <p>• Component order</p>
                <p>• Grid layouts</p>
                <p>• Spacing adjustments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Palette className="mr-2 h-4 w-4" />
                  Styling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Color schemes</p>
                <p>• Typography</p>
                <p>• Button styles</p>
                <p>• Background colors</p>
              </CardContent>
            </Card>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">Quick Actions</h4>
              <div className="space-y-2">
                <Button size="sm" variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="mr-2 h-4 w-4" />
                  Site Settings
                </Button>
                <Button size="sm" variant="outline" className="w-full justify-start bg-transparent">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cms-active {
          padding-top: 60px !important;
          padding-right: 320px !important;
        }
        
        [data-cms-editable] {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        [data-cms-editable]:hover {
          background-color: rgba(249, 115, 22, 0.1) !important;
        }
        
        @media (max-width: 1024px) {
          .cms-active {
            padding-right: 0 !important;
          }
        }
      `}</style>
    </>
  )
}
