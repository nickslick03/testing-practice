import { ceaserCipher } from "./ceaserCipher";

test('message shift 1', () => {
    expect(ceaserCipher('attack at dawn', 1)).toBe('buubdl bu ebxo');
})

test('message shift 10', () => {
    expect(ceaserCipher('attack at dawn', 10)).toBe('kddkmu kd nkgx');
})

test('message shift 25', () => {
    expect(ceaserCipher('attack at dawn', 25)).toBe('zsszbj zs czvm');
})