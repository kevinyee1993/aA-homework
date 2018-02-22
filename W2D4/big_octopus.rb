FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
TILES_ARRAY = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
NEW_TILES_ARRAY = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}


#sluggish octopus - quadratic - nested loops - O^2
def sluggish_octopus

  big_fish = ""

  (0..FISH.length-2).each do |idx1|

    found_biggest = true
    (idx1+1..FISH.length-1).each do |idx2|
      if FISH[idx2].length > FISH[idx1].length
        found_biggest = false
        big_fish = FISH[idx2]
      end

      return big_fish if found_biggest
    end

  end

end

#copy = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

#dominant octopus - merge sort or quick sort O(n log n)
def quick_sort(arr)
  return arr if arr.length <= 1

  ref = arr.shift
  left = quick_sort(arr.select{|x| x.length <= ref.length})
  right = quick_sort(arr.select{|x| x.length > ref.length})

  left + [ref] + right
end

def dominant_octopus
  copy = quick_sort(FISH)
  copy[-1]
end


#O(n) - linear
def clever_octopus
  biggest = ""

  FISH.each do |el|
    biggest = el if el.length > biggest.length
  end

  biggest
end

def slow_dance(target, moves)
  moves.each_with_index do |tile, idx|
    return idx if tile == target
  end
end

def constant_dance(target, new_moves)
  return new_moves[target]
end

p constant_dance("right-down", NEW_TILES_ARRAY)
