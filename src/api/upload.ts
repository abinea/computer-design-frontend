import request from './request'

export function uploadImage(data: FormData) {
  return request({
    url: `/image`,
    method: 'POST',
    data,
  })
}

export function clearImage() {
  return request({
    url: `/image`,
    method: 'DELETE',
  })
}
