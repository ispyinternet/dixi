import fs from 'fs'
import path from 'path'

const folders = [
  'background',
  'land',
  'body',
  'costume',
  'hat',
  'glasses',
  'chain',
  'hand',
  'foreground',
]

type InventoryItem = {
  title: string
  items: {
    image: string
    icon: string
    name: string
  }[]
}

function toCamelCase(input: string): string {
  return input.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

function toTitleCase(input: string): string {
  return input.replace(/(_|^)[a-z]/g, (match) => match.toUpperCase().replace('_', ' '))
}

// Function to read files in a directory
function readFilesInDirectory(directoryPath: string): string[] {
  try {
    const files = fs.readdirSync(directoryPath)
    return files.filter((file) => fs.statSync(path.join(directoryPath, file)).isFile())
  } catch (error) {
    console.error(`Error reading files in ${directoryPath}: ${error}`)
    return []
  }
}

// Function to sort filenames numerically
function sortFilenamesNumerically(filenames: string[]): string[] {
  return filenames.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
}

// Function to list images in each folder
function listImagesInFolders(folders: string[]): Record<string, InventoryItem> {
  const imagesInFolders: Record<string, InventoryItem> = {}

  folders.forEach((folder) => {
    const folderPath = path.join(__dirname, `/public/${folder}`) // Assuming images folders are in the same directory as this script
    let images = readFilesInDirectory(folderPath)
    images = sortFilenamesNumerically(images)
    imagesInFolders[toCamelCase(folder)] = {
      title: toTitleCase(folder),
      items: images.map((item) => ({
        image: `/${folder}/${item}`,
        icon: `/${folder}/${item}`,
        name: toTitleCase(item.split('.')[0]),
      })),
    }
  })

  return imagesInFolders
}

// Get the list of images in each folder
const imagesInFolders = listImagesInFolders(folders)

function saveDataToFile(data: unknown, filePath: string): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    console.log(`Data saved to ${filePath}`)
  } catch (error) {
    console.error(`Error saving data to ${filePath}: ${error}`)
  }
}

// Save the list of images in each folder to a JSON file
const outputFilePath = path.join(__dirname, 'src', 'lib', 'inventory.json')
saveDataToFile(imagesInFolders, outputFilePath)
